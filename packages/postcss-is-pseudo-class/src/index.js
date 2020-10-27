import * as postcss from 'postcss';
import postcssSelector from 'postcss-selector-parser';

/** PostCSS Plugin that transforms `:is` pseudo-classes.
* @param {Object} opts
*/
export default postcss.plugin('postcss-is-pseudo-class', opts => {
	opts = Object(opts);

	return onEachRoot.bind(opts);
});

/** Conditionally transform any css with rules with an `:is` pseudo-class.
* @param {Object} rule
*/
function onEachRoot(sheet) {
	// walk rules that likely contain an :is() pseudo-class
	sheet.walkRules(/:is\(.+\)/, rule => {
		const oldSelector = rule.selector;
		const newSelector = getTransformedSelectorList.call(this, oldSelector);

		// update rules that have been transformed
		if (oldSelector !== newSelector) {
			rule.selector = newSelector;
		}
	});
}

/** Return a selector list with any `:is` pseudo-classes transformed.
* @param {Object} rule
*/
function getTransformedSelectorList(selectors) {
	return postcssSelector(
		selector => selector.each(onEachSelector.bind(this))
	).processSync(selectors);
}

/** Return a selector with any `:is` pseudo-classes transformed.
* @param {Object} selector
*/
function onEachSelector(selector) {
	// whether the selector has an immediately nested tag
	const hasNoTagInSelector = selector.nodes.every(part => part.type !== 'tag');

	// conditionally transform each part of a selector
	selector.each((part, index) => {
		if (isFilledContainer(part)) {
			// transform inner-selectors first
			onEachSelector.call(this, part);

			if (isAcceptableIsPseudoClass(part, hasNoTagInSelector)) {
				// replace the `:is` pseudo-class in the clone with its inner selectors
				part.each(innerPart => {
					// clone the outer selector and the inner selector
					const selectorClone = selector.clone();
					const innerClone = innerPart.clone();

					// remove any selector list whitespace that would coincidently introduce a descendant combinator
					if (index > 0) {
						const innerPartDeepestFirst = getMostDeeplyNestedFirstNode(innerClone);

						getMostDeeplyNestedFirstNode(selectorClone).spaces.before = innerPartDeepestFirst.spaces.before;

						innerPartDeepestFirst.spaces.before = '';
					}

					// replace the `:is` pseudo-class in the clone with the inner selector
					selectorClone.nodes[index] = innerClone;

					// insert the transformed selector before the current selector
					selector.parent.insertBefore(selector, selectorClone);

					// transform any inner `:is` pseudo-classes
					onEachSelector.call(this, selectorClone);
				});

				// remove the transformed selector
				selector.remove();

				// return false to stop transforming this selector
				return false;
			}
		}
	});
}

/** Return whether a node is an acceptable container (having nested nodes)
* @param {Object} node
*/
function isFilledContainer(node) {
	return Array.isArray(node.nodes) && node.nodes.length;
}

/** Returns whether a node is an `:is` pseudo-class with no immediately nested complex selector or, conditionally, tag selector.
* @param {Object} node
*/
function isAcceptableIsPseudoClass(node, hasNoTagInSelector) {
	return (
		// whether the node is a pseudo selector; and,
		node.type === 'pseudo' &&
		// whether the pseudo selector is `:is`; and,
		node.value === ':is' &&
		// for every child of the node;
		node.nodes.every(
			childNode => (
				// whether the node is not a filled container; or,
				!isFilledContainer(childNode) ||
				// for every child of the node;
				childNode.nodes.every(
					grandChildNode => (
						// whether the node is not a nested complex selector; and,
						grandChildNode.type !== 'combinator' &&
						(
							// whether the selector has no tag selector; or,
							hasNoTagInSelector ||
							// whether the node is not also a tag selector
							grandChildNode.type !== 'tag'
						)
					)
				)
			)
		)
	);
}

/** Return the most deeply nested first node.
* @param {Object} node
*/
function getMostDeeplyNestedFirstNode(node) {
	return Array.isArray(node.nodes) && node.nodes.length
		? getMostDeeplyNestedFirstNode(node.nodes[0])
	: node;
}
