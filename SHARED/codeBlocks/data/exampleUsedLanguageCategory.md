import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

<Admonition type="info" title={props.title}>
    <Tabs>
        <TabItem value="ie" label={props.tab0}>
            <Admonition type="info" title={props.tab0}>
                <Tabs style="margin-left: 30px;">
                    <TabItem value="eur-eng" label={props.lang0}>
                    ```js
                    {
                        ...
                        "name": "Euro",
                        ...
                        "scope": {
                            "code": "M",
                            "description": "Monetary (cash / legal tender)"
                        },
                        ...
                    }
                    ```
                    </TabItem>
                    <TabItem value="eur-ita" label={props.lang1}>
                    ```js
                    {
                        ...
                        "name": "Euro",
                        ...
                        "scope": {
                            "code": "M",
                            "description": "Monetario (corso legale)"
                        },
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
                    <TabItem value="che-eng" label={props.lang0}>
                    ```js
                    {
                        ...
                        "name": "WIR Euro",
                        ...
                        "scope": {
                            "code": "F",
                            "description": "Financial only (accounting units / instruments)"
                        },
                        ...
                    }
                    ```
                    </TabItem>
                    <TabItem value="che-ita" label={props.lang1}>
                    ```js
                    {
                        ...
                        "name": "Euro WIR",
                        ...
                        "scope": {
                            "code": "F",
                            "description": "Uso finanziario (unità contabili / strumenti)"
                        },
                        ...
                    }
                    ```
                    </TabItem>
                </Tabs>
            </Admonition>
        </TabItem>
    </Tabs>
</Admonition>