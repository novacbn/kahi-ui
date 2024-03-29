<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Scrollable from "../scrollable/Scrollable.svelte";
    import * as Stack from "../stack";

    import Article from "./Article.svelte";

    const IS = [
        ["article", true],
        ["div", false],
        ["main", false],
    ];
</script>

<Meta title="Layouts/Article" />

<Template>
    <slot />
</Template>

<Story name="Anchor">
    <Article>
        <a href="https://google.com">Goto google.com</a>

        <p>
            This has nested <a href="#">anchor tags</a>!
        </p>

        <blockquote>
            <p>
                This has nested <a href="#">anchor tags</a>!
            </p>
        </blockquote>

        <ul>
            <li>
                This has nested <a href="#">anchor tags</a>!
            </li>
        </ul>

        <table>
            <thead>
                <tr>
                    <td>Anchors Table!</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>
                        This has nested <a href="#">anchor tags</a>!
                    </td>
                </tr>
            </tbody>
        </table>
    </Article>
</Story>

<Story name="Blockquote">
    <Article max_width="prose" margin_x="auto" margin_y="medium">
        <blockquote>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta, urna vel
                tristique varius, ipsum erat auctor odio, id imperdiet mauris velit eget quam. Donec
                viverra urna eu ligula eleifend, sed molestie lectus convallis. Nullam gravida
                placerat ex, sodales porttitor nibh. Suspendisse vitae nisi euismod, venenatis dui
                eu, hendrerit risus. Maecenas at hendrerit odio, at dictum nulla. Morbi tristique,
                augue vel blandit bibendum, mauris nibh finibus justo, ut mollis magna neque in
                lectus. Sed dignissim, enim sit amet lobortis tincidunt, nibh risus elementum urna,
                vel tincidunt nisi elit vel tortor. Curabitur iaculis nulla nec odio efficitur, sit
                amet auctor odio mattis. Aenean quam arcu, feugiat non turpis eget, aliquet
                vestibulum lacus.
            </p>

            <p>
                Praesent lacinia elit et risus molestie pretium. Aenean semper mauris ut erat ornare
                lobortis. Integer sollicitudin bibendum rhoncus. Nulla nisi orci, maximus elementum
                libero ut, tristique scelerisque sapien. Aenean ultricies dui quis finibus pretium.
                Nunc tellus neque, cursus et egestas vel, elementum sit amet lacus. Aenean ac
                euismod nunc, id molestie eros.
            </p>

            <cite>— Lorem Ipsum</cite>
        </blockquote>
    </Article>
</Story>

<Story name="Code">
    <Article>
        <code>import * as Kahi from "@kahi-ui/framework";</code>

        <br />
        <br />

        <!-- prettier-ignore -->
        <pre>import math from "a-math-library";

const result = math.add(1, 1);
console.log("Our value is:", result);</pre>

        <code>import * as Kahi from "@kahi-ui/framework";</code>

        <p>
            This has nested <code>code tags</code>!
        </p>

        <blockquote>
            <p>
                This has nested <code>code tags</code>!
            </p>
        </blockquote>

        <ul>
            <li>
                This has nested <code>code tags</code>!
            </li>
        </ul>

        <table>
            <thead>
                <tr>
                    <td>Code Table!</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>
                        This has nested <code>code tags</code>!
                    </td>
                </tr>
            </tbody>
        </table>
    </Article>
</Story>

<Story name="Divider">
    <Article>
        <hr />
    </Article>
</Story>

<Story name="Embedded">...</Story>

<Story name="Heading">
    <Article>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
    </Article>
</Story>

<Story name="List">
    <Article>
        <ol>
            <li>List Item #1</li>
            <li>List Item #2</li>
            <li>List Item #3</li>
        </ol>

        <ul>
            <li>List Item #1</li>
            <li>List Item #2</li>
            <li>List Item #3</li>
        </ul>
    </Article>
</Story>

<Story name="Paragraph">
    <Article>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta, urna vel
            tristique varius, ipsum erat auctor odio, id imperdiet mauris velit eget quam. Donec
            viverra urna eu ligula eleifend, sed molestie lectus convallis. Nullam gravida placerat
            ex, sodales porttitor nibh. Suspendisse vitae nisi euismod, venenatis dui eu, hendrerit
            risus. Maecenas at hendrerit odio, at dictum nulla. Morbi tristique, augue vel blandit
            bibendum, mauris nibh finibus justo, ut mollis magna neque in lectus. Sed dignissim,
            enim sit amet lobortis tincidunt, nibh risus elementum urna, vel tincidunt nisi elit vel
            tortor. Curabitur iaculis nulla nec odio efficitur, sit amet auctor odio mattis. Aenean
            quam arcu, feugiat non turpis eget, aliquet vestibulum lacus.
        </p>

        <p>
            Praesent lacinia elit et risus molestie pretium. Aenean semper mauris ut erat ornare
            lobortis. Integer sollicitudin bibendum rhoncus. Nulla nisi orci, maximus elementum
            libero ut, tristique scelerisque sapien. Aenean ultricies dui quis finibus pretium. Nunc
            tellus neque, cursus et egestas vel, elementum sit amet lacus. Aenean ac euismod nunc,
            id molestie eros.
        </p>
    </Article>
</Story>

<Story name="Small">
    <Article>
        <small>I am small text!</small>

        <p>
            This has nested <small>small tags</small>!
        </p>

        <blockquote>
            <p>
                This has nested <small>small tags</small>!
            </p>
        </blockquote>

        <ul>
            <li>
                This has nested <small>small tags</small>!
            </li>
        </ul>

        <table>
            <thead>
                <tr>
                    <td>Small Table!</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>
                        This has nested <small>small tags</small>!
                    </td>
                </tr>
            </tbody>
        </table>
    </Article>
</Story>

<Story name="Table">
    <Article>
        <table>
            <thead>
                <tr>
                    <th />
                    <th>Minimum</th>
                    <th>Maximum</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><strong>mobile</strong></td>
                    <td><code>0px</code></td>
                    <td><code>640px</code></td>
                </tr>

                <tr>
                    <td><strong>tablet</strong></td>
                    <td><code>641px</code></td>
                    <td><code>768px</code></td>
                </tr>

                <tr>
                    <td><strong>desktop</strong></td>
                    <td><code>769px</code></td>
                    <td><code>1024px</code></td>
                </tr>

                <tr>
                    <td><strong>widescreen</strong></td>
                    <td><code>1025px</code></td>
                    <td><code>∞</code></td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <th />
                    <th>Minimum</th>
                    <th>Maximum</th>
                </tr>
            </tfoot>
        </table>

        <table data-variation="borders stripes">
            <thead>
                <tr>
                    <th />
                    <th>Minimum</th>
                    <th>Maximum</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><strong>mobile</strong></td>
                    <td><code>0px</code></td>
                    <td><code>640px</code></td>
                </tr>

                <tr>
                    <td><strong>tablet</strong></td>
                    <td><code>641px</code></td>
                    <td><code>768px</code></td>
                </tr>

                <tr>
                    <td><strong>desktop</strong></td>
                    <td><code>769px</code></td>
                    <td><code>1024px</code></td>
                </tr>

                <tr>
                    <td><strong>widescreen</strong></td>
                    <td><code>1025px</code></td>
                    <td><code>∞</code></td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <th />
                    <th>Minimum</th>
                    <th>Maximum</th>
                </tr>
            </tfoot>
        </table>

        <Scrollable width="medium">
            <table>
                <thead>
                    <tr>
                        <th />
                        <th>Minimum</th>
                        <th>Maximum</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td><strong>mobile</strong></td>
                        <td><code>0px</code></td>
                        <td><code>640px</code></td>
                    </tr>

                    <tr>
                        <td><strong>tablet</strong></td>
                        <td><code>641px</code></td>
                        <td><code>768px</code></td>
                    </tr>

                    <tr>
                        <td><strong>desktop</strong></td>
                        <td><code>769px</code></td>
                        <td><code>1024px</code></td>
                    </tr>

                    <tr>
                        <td><strong>widescreen</strong></td>
                        <td><code>1025px</code></td>
                        <td><code>∞</code></td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        <th />
                        <th>Minimum</th>
                        <th>Maximum</th>
                    </tr>
                </tfoot>
            </table>
        </Scrollable>

        <Scrollable width="medium">
            <table data-variation="borders stripes">
                <thead>
                    <tr>
                        <th />
                        <th>Minimum</th>
                        <th>Maximum</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td><strong>mobile</strong></td>
                        <td><code>0px</code></td>
                        <td><code>640px</code></td>
                    </tr>

                    <tr>
                        <td><strong>tablet</strong></td>
                        <td><code>641px</code></td>
                        <td><code>768px</code></td>
                    </tr>

                    <tr>
                        <td><strong>desktop</strong></td>
                        <td><code>769px</code></td>
                        <td><code>1024px</code></td>
                    </tr>

                    <tr>
                        <td><strong>widescreen</strong></td>
                        <td><code>1025px</code></td>
                        <td><code>∞</code></td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        <th />
                        <th>Minimum</th>
                        <th>Maximum</th>
                    </tr>
                </tfoot>
            </table>
        </Scrollable>
    </Article>
</Story>

<Story name="Elements">
    <Stack.Container spacing="medium">
        {#each IS as [is, is_default] (is)}
            <Article is={is_default ? undefined : is}>
                <h1>
                    {`${is.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </h1>
            </Article>
        {/each}
    </Stack.Container>
</Story>
