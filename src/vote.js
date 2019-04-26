import React from 'react';
import ReactDOM from 'react-dom';
// import 'antd-mobile/dist/antd-mobile.css';
// import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import Tabs from 'antd-mobile/lib/tabs';  // 加载 JS
import Badge from 'antd-mobile/lib/badge';  // 加载 JS
import 'antd-mobile/lib/tabs/style/css';        // 加载 CSS
import 'antd-mobile/lib/badge/style/css';        // 加载 CSS

export default class Vote extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                { title: <Badge text={'3'}>我发起的</Badge> },
                { title: <Badge text={'今日(20)'}>邀请我的</Badge> },
                // { title: <Badge dot>Third Tab</Badge> },
            ]
        };
    }
    
    render()
    {
        return (
            <div>
                <Tabs tabs={this.state.tabs}
                initialPage={1}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        我发起的
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        邀请我的
                    </div>
                </Tabs>
            </div>
        );
    }
}

ReactDOM.render(<Vote/>, document.getElementById('vote'));
