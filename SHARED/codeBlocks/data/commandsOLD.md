import TerminalWindow from '@site/src/components/TerminalWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';
import CodeBlock from '@theme/CodeBlock';

<Admonition type="info" title={props.title}>
  <Tabs>
    <TabItem value="start" label="START">
      <TerminalWindow promptStyle="bash" title={`${props.titleTerminal} START`} titleShadow={true}>
        <CodeBlock language="shell">npm start</CodeBlock>
      </TerminalWindow>
    </TabItem>
    <TabItem value="build" label="BUILD">
      <TerminalWindow promptStyle="bash" title={`${props.titleTerminal} BUILD`} titleShadow={true}>
        <CodeBlock language="shell">npm run build</CodeBlock>
      </TerminalWindow>
    </TabItem>
    <TabItem value="lint" label="LINT">
      <TerminalWindow promptStyle="bash" title={`${props.titleTerminal} LINT`} titleShadow={true}>
        <CodeBlock language="shell">npm run lint</CodeBlock>
      </TerminalWindow>
    </TabItem>
    <TabItem value="test" label="TEST">
      <TerminalWindow promptStyle="bash" title={`${props.titleTerminal} TEST`} titleShadow={true}>
        <CodeBlock language="shell">npm run test</CodeBlock>
      </TerminalWindow>
    </TabItem>
  </Tabs>
</Admonition>
