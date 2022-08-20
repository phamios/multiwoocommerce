import { PageContainer } from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, Card, Input } from 'antd';
import React, { useState } from 'react';
 
const ConfigSite: React.FC = () => {
  const intl = useIntl();
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  
  return (
    <PageContainer>
      <Card> 
      <FormattedMessage
            id="pages.websiteurl"
            defaultMessage="Website URL"
            
          />
      <Input
             
              placeholder={intl.formatMessage({
                id: 'pages.website_url_input',
                defaultMessage: 'https://wallcorners.com',
                
              })}
            /><br/><br/>
             <FormattedMessage
            id="pages.websiteurl"
            defaultMessage="Consumer Key"
            
          />
          <Input 
              placeholder={intl.formatMessage({
                id: 'pages.website_url_input',
                defaultMessage: 'xxxxx',
                
              })}
            /><br/><br/>
             <FormattedMessage
            id="pages.websiteurl"
            defaultMessage="Consumer Secret"
            
          />
          <Input 
            placeholder={intl.formatMessage({
              id: 'pages.website_url_input',
              defaultMessage: 'xxxxx',
                
              })}
            />
            <br/><br/>
             <Button
            type="primary"
            key="primary"
            onClick={() => {
              // handleModalVisible(true);
            }}>Submit</Button>
      {/* <SubmitForm
        onSubmit={async (value) => {
          // const success = await handleUpdate(value);
          // if (success) {
          //   handleUpdateModalVisible(false);
          //   setCurrentRow(undefined);
          //   if (actionRef.current) {
          //     actionRef.current.reload();
          //   }
          // }
        }}
        onCancel={() => {
          // handleUpdateModalVisible(false);
          // if (!showDetail) {
          //   setCurrentRow(undefined);
          // }
        }}
        updateModalVisible={updateModalVisible}
        values={ {}}
      /> */}
      </Card>
    </PageContainer>
  );
};

export default ConfigSite;
