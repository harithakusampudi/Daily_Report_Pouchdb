import React from 'react'

import { Collapse, List } from 'antd';
import styled from "styled-components";

import * as moment from 'moment';

const Panel = Collapse.Panel;



export default class ReportComponent extends React.Component{
    constructor(){
        super();
    }
    componentWillMount(){
    }
    render(){
        console.log("list",this.props.list);
        return(
            <Wrapper>
                <Title>Report
                   
                </Title>
                <Borderd>
                <Collapse bordered={false} >
                    <Panel header="Hourly" key="1">
                        <List
                        size="small"
                        dataSource={this.props.list}
                        renderItem={item => (
                        <List.Item>
                        <List.Item.Meta
                        title={<h4>{item.task}</h4>}
                        description={<h5>{item.hour} hours spent</h5>}
                        />
                         
                         <div>{new Date(`${item._id}`).toISOString().substring(0, 10)}</div></List.Item>
                        )}
                        />
                    </Panel>
                    <Panel header="Weekly" key="2">
                        Weekly tasks
                    </Panel>
                    <Panel header="Monthly" key="3">
                        Monthly tasks
                    </Panel>
                </Collapse>
                </Borderd>
          </Wrapper>
        )
    }
}

//styled components
const Wrapper = styled.div`
  display: 'flex',
  justifyContent: 'flex-end',
`;
const Title = styled.h1`
  font-size: 1.5em;
  display: 'flex',
  marginBottom: 0
`;
const Borderd = styled.div`
  border: 0.5em
  height:100,
  width:100,
`;