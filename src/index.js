import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import { Steps } from 'antd-mobile';
const Step = Steps.Step;

export default class Home extends React.Component
{
    render()
    {
        return (
            <Steps direction="vertical" size="small" current={1}>
                <Step title="修改webpack" description="webpack.config.js 增加入口文件" />
                <Step title="编写代码" description="文件名与入口文件一致" />
                <Step title="重启服务" description="新文件加入后需要重启服务才能使用热更新" />
                <Step title="访问地址" description="http://localhost:3000/[pathName]" />
            </Steps>
        );
    }
}

ReactDOM.render(<Home/>, document.getElementById('home'));
