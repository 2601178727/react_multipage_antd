import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import { Tabs, WhiteSpace } from 'antd-mobile';

export default class Vote extends React.Component
{
    callback = () => {
        console.log(this)
    }
    render()
    {
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="选项卡一" key="1">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                        选项卡一内容
                        </div>
                    </TabPane>
                    <TabPane tab="选项卡二" key="2">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                        选项卡二内容
                        </div>
                    </TabPane>
                    <TabPane tab="选项卡三" key="3">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                        选项卡三内容
                        </div>
                    </TabPane>
                </Tabs>
                <WhiteSpace />
            </div> 
        );
    }
}

ReactDOM.render(<Vote/>, document.getElementById('vote'));
