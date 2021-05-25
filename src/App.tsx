import React, {useCallback} from 'react';
import {Card, Col, Image, message, Row, Space, Typography} from "antd";
import './App.css';
import modelUpload from './assets/model_upload.gif';
import modelEdit from './assets/edit.gif';
import modelGenie from './assets/genie.gif';
import modelDashboard from './assets/dashboard.gif';


const Caption = ({order, text}: { order?: number; text: string }) => (
  <div className="text-center">
    {order ? <Typography.Text strong>({order}) </Typography.Text> : undefined}
    <Typography.Text>{text}</Typography.Text>
  </div>
);

const Guide = () => {
  const onClickCitation = useCallback((e) => {
    e.preventDefault();
    const promise = navigator.clipboard.writeText(
      '@article{li2021modelps,\n' +
      '  title={ModelPS: An Interactive and Collaborative Platform for Editing Pre-trained Models at Scale},\n' +
      '  author={Li, Yuanming and Zhang, Huaizheng and Jiang, Shanshan and Yang, Fan and Wen, Yonggang and Luo, Yong},\n' +
      '  journal={arXiv preprint arXiv:2105.08275},\n' +
      '  year={2021}\n' +
      '}',
    );
    promise.then(() => {
      message.success('You have copied the bibtex citation!');
    });
  }, []);

  return (
    <Space direction="vertical" size="middle">
      <div className="text-center">
        <Typography.Title level={2}>
          ModelPS: An Interactive and Collaborative Platform for Editing Pre-trained Models at Scale
        </Typography.Title>
        <Space direction="vertical">
          <Typography.Text>
            Yuanming Li<sup>&lowast;, 1</sup>, Huaizheng Zhang<sup>&lowast;, 1</sup>, Shanshan Jiang<sup>1</sup>, Fan
            Yang
            <sup>1</sup>, Yonggang Wen<sup>1</sup> and Yong Luo<sup>2</sup>
          </Typography.Text>
          <Typography.Text type="secondary">1 Nanyang Technological University, 2 Wuhan University</Typography.Text>
        </Space>
      </div>
      <Row gutter={20} justify="center">
        <Col span={2} className="text-center">
          <a href={'https://github.com/cap-ntu/ML-Model-CI'}>Code</a>
        </Col>
        <Col span={2} className="text-center">
          <a href={'https://arxiv.org/abs/2105.08275'}>Paper</a>
        </Col>
        <Col span={2} className="text-center">
          <a href={'https://mlmodelci.com/document'}>Tutorial</a>
        </Col>
        <Col span={2} className="text-center">
          <a href={'.'} onClick={onClickCitation}>
            Cite
          </a>
        </Col>
        <Col span={2} className="text-center">
          <a href={'https://mlmodelci.com/'}>News</a>
        </Col>
      </Row>
      <Card title={<Typography.Title level={3}>Abstract</Typography.Title>} hoverable>
        AI engineering has emerged as a crucial discipline to democratize deep neural network (DNN) models among
        software developers with a diverse background. In particular, altering these DNN models in the deployment stage
        posits a tremendous challenge. In this research, we propose and develop a low-code solution, ModelPS (an acronym
        for &ldquo;Model Photoshop&rdquo;), to enable and empower collaborative DNN model editing and intelligent model
        serving. The ModelPS solution embodies two transformative features: 1) a user-friendly web interface for a
        developer team to share and edit DNN models pictorially, in a low-code fashion, and 2) a model genie engine in
        the backend to aid developers in customizing model editing configurations for given deployment requirements or
        constraints. Our case studies with a wide range of deep learning (DL) models show that the system can
        tremendously reduce both development and communication overheads with improved productivity. The code has been
        released as an open-source package at GitHub.
      </Card>
      <Card title={<Typography.Title level={3}>Demonstration</Typography.Title>} hoverable>
        <Row gutter={[16, 24]}>
          <Col xl={12}>
            <Image src={modelUpload}/>
            <Caption order={1} text="Upload Model"/>
          </Col>
          <Col xl={12}>
            <Image src={modelEdit}/>
            <Caption order={2} text="Edit Pre-trained Model"/>
          </Col>
          <Col xl={12}>
            <Image src={modelGenie}/>
            <Caption order={3} text="Search Training Configuration with Model Genie"/>
          </Col>
          <Col xl={12}>
            <Image src={modelDashboard}/>
            <Caption order={4} text="Model Dashboard"/>
          </Col>
        </Row>
      </Card>
    </Space>
  );
};

function App() {
  return (
    <>
      <Row justify="center" gutter={[0, 16]} style={{minHeight: '100vh'}}>
        <Col lg={22} xl={20} xxl={16} style={{marginTop: 48}}>
          <Guide/>
        </Col>
      </Row>
      <div style={{opacity: 0.3, padding: '16px 0px'}}>
        <p className="footer">
          <span className="logo">CAP NTU</span>
          <br/>
          <span className="copyright">© 2021 Nanyang Technological University, Singapore</span>
        </p>
      </div>
    </>
  );
}

export default App;
