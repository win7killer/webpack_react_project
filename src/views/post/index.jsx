import React from 'react';
import { v4 } from 'uuid';
import MainNavBar from '@/components/navbar';
import List from '@/components/list';
import ListBox from '@/components/list/ListBox';
import CommonStateContext from '@/components/common/CommonStateContext';
import './index.less';
import { Toast } from 'antd-mobile';


const imgArr = [
  'http://mtapplet.meitudata.com/5f4533be63abf98843.jpg',
  'http://mtapplet.meitudata.com/5f4533ab97f96f75f7.jpg',
]

const ListData = function() {
  return new Array(10).fill('').map((em, index) => {
    return {
      id: v4(),
      pic: imgArr[index % 2],
      isBox: true,
    }
  })
}

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [...ListData()],
    };
  }

  componentDidMount() {
    Toast.info('222')
    console.log('post componentDidMount', this.props);
  }

  handleAdd = () => {
    this.setState({
      list: [
        ...this.state.list,
        ...ListData(),
      ]
    }, () => {
      console.log(this.state.list);
    })
  }

  handleChangeListType = () => {
    this.setState({
      isBox: !this.state.isBox,
    })
  }

  render() {
    let { isBox } = this.state;
    return <div className="post-base-page">
      <div onClick={this.handleChangeListType}>{isBox ? 'list_box': 'list_window'}</div>

      <CommonStateContext.Provider value={{
        pagePath: 'post'
      }}>
        <MainNavBar></MainNavBar>
      </CommonStateContext.Provider>
      <>some</>
      <h1>post base page</h1>
      {
        isBox
          ? <ListBox list={this.state.list} itemHeight={200} boxHeight={400} valType="px"></ListBox>
          : <List list={this.state.list} itemHeight={200} valType="px"></List>
      }

      {/* <ListBox list={ListData} itemHeight={160} valType="px"></ListBox> */}
      <div className="add" onClick={this.handleAdd}>add</div>
    </div>
  }
}
