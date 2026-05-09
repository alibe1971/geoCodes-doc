/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type CSSProperties, type ReactNode} from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  minHeight?: number;
  title?: string;
  promptStyle?: string;
  titleShadow?: boolean;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
}

export default function TerminalWindow({
  children,
  minHeight,
  title = 'Terminal',
  promptStyle = 'bash',
  titleShadow = false,
  style,
  bodyStyle,
}: Props): JSX.Element {
    const transformPromptStyle = (input: string): string => {
        const lowerCaseInput = input.toLowerCase();
        if (lowerCaseInput === 'bash' || lowerCaseInput === 'zsh' || lowerCaseInput === 'fish' || lowerCaseInput === 'windows') {
            return lowerCaseInput + 'Prompt';
        } else {
            return 'bashPrompt';
        }
    };
    const transformedPromptStyle = transformPromptStyle(promptStyle);
    return (
        <div className={styles.terminalWindow} style={{...style, minHeight}}>
          <div className={styles.terminalWindowHeader}>
            <div className={styles.buttons}>
              <span className={styles.dot} style={{background: '#f25f58'}} />
              <span className={styles.dot} style={{background: '#fbbe3c'}} />
              <span className={styles.dot} style={{background: '#58cb42'}} />
            </div>
          <div className={clsx(styles.terminalWindowTitleBar, 'text--truncate')}>
              <div className={clsx(styles.titleContainer)}>
                  {titleShadow && <span className={clsx(styles.backgroundTitle)}>{title}</span>}
                  <span className={clsx(styles.foregroundTitle)}>{title}</span>
              </div>
          </div>
          </div>
          <div className={clsx(styles.terminalWindowBody, styles[transformedPromptStyle])}  style={bodyStyle}>
            {children}
          </div>
        </div>
    );
}
