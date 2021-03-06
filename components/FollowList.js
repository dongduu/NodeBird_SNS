import { StopOutlined } from "@ant-design/icons/lib/icons";
import { Button, Card, List } from "antd";
import PropTypes from "prop-types";

const FollowList = ({ header, data }) => {
  return (
    <List
      style={{ marginButton: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      loadMore={
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <Button>더보기</Button>
        </div>
      }
      header={<div>{header}</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
