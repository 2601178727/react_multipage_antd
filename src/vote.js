import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

export default class Vote extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                { title: <Badge text={'3'}>First Tab</Badge> },
                { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
                { title: <Badge dot>Third Tab</Badge> },
            ],
            tabs2: [
                { title: 'First Tab', sub: '1' },
                { title: 'Second Tab', sub: '2' },
                { title: 'Third Tab', sub: '3' },
            ]
        };
    }
    render()
    {
        return (
            <div>
                <Tabs tabs={this.tabs}
                initialPage={1}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                </Tabs>
                <WhiteSpace />
                <Tabs tabs={this.tabs2}
                initialPage={1}
                tabBarPosition="bottom"
                renderTab={tab => <span>{tab.title}</span>}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        );
    }
}

ReactDOM.render(<Vote/>, document.getElementById('vote'));
