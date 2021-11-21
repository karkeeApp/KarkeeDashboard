import { FC } from 'react';
import { Row, Col, Card, Descriptions } from 'antd';

// Types
import { User } from '@/types/user';

// Custom Hooks
import { useGlobal } from '@/hooks';

export interface AdminSettingsDescriptionProps {
  admin: User;
}

const AdminSettingsDescription: FC<AdminSettingsDescriptionProps> = ({
  admin,
}) => {
  const { settings } = useGlobal();

  return (
    <>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={17}>
          <Card title='Sign In Info'>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={24}>
                <Descriptions
                  layout='vertical'
                  column={1}
                  bordered
                  colon={false}
                  labelStyle={{
                    fontWeight: 'bold',
                  }}
                >
                  <Descriptions.Item label='Email'>
                    {admin.email}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={7}>
          <Card title='Administration'>
            <Descriptions
              layout='vertical'
              column={1}
              bordered
              colon={false}
              labelStyle={{
                fontWeight: 'bold',
              }}
            >
              <Descriptions.Item label='Role'>
                {settings.user_roles.find((r) => r.value === admin.role)?.label}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AdminSettingsDescription;
