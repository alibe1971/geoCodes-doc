import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

<Admonition type="info" title={props.title}>
    <Tabs>
        <TabItem value="ie" label={props.tab0}>
            <Admonition type="info" title={props.tab0}>
                <Tabs style="margin-left: 30px;">
                    <TabItem value="ie-eng" label={props.lang0}>
                    ```js
                    {
                        ...
                        "name": "Ireland",
                        "fullName": "Republic of Ireland",
                        ...
                    }
                    ```
                    </TabItem>
                    <TabItem value="ie-ita" label={props.lang1}>
                    ```js
                    {
                        ...
                        "name": "Irlanda",
                        "fullName": "Repubblica d'Irlanda",
                        ...
                    }
                    ```
                    </TabItem>
                </Tabs>
            </Admonition>
        </TabItem>
        <TabItem value="it" label={props.tab1}>
            <Admonition type="info" title={props.tab1}>
                <Tabs>
                    <TabItem value="it-eng" label={props.lang0}>
                    ```js
                    {
                        ...
                        "name": "Italy",
                        "fullName": "Italian Republic",
                        ...
                    }
                    ```
                    </TabItem>
                    <TabItem value="it-ita" label={props.lang1}>
                    ```js
                    {
                        ...
                        "name": "Italia",
                        "fullName": "Repubblica Italiana",
                        ...
                    }
                    ```
                    </TabItem>
                </Tabs>
            </Admonition>
        </TabItem>
    </Tabs>
</Admonition>