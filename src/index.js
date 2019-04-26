import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Steps } from 'antd';
const Step = Steps.Step;

export default class Home extends React.Component
{
    render()
    {
        return (
            <Steps direction="vertical" current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>
        );
    }
}

ReactDOM.render(<Home/>, document.getElementById('home'));
