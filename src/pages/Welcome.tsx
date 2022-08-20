import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Card, Typography } from 'antd';
import React from 'react';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = () => {
  const intl = useIntl();

  return (
    <PageContainer>
      <Card>
         
         <label>
         Hello Component
         </label>
         
          
        
      </Card>
    </PageContainer>
  );
};

export default Welcome;
