import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

<Admonition type="info" title={props.title}>
    <Tabs>
        <TabItem value="ie" label={props.tab0}>
            ```js
            {
                ...
                "alpha2": "IE",
                ...
            }
            ```
        </TabItem>
        <TabItem value="it" label={props.tab1}>
            ```js
            {
                ...
                "alpha2": "IT",
                ...
            }
            ```
        </TabItem>
    </Tabs>
</Admonition>