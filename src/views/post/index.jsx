import React from 'react';
import { v4 } from 'uuid';
import MainNavBar from '@/components/navbar';
import List from '@/components/list';
import './index.less';


const imgArr = [
  'http://mtapplet.meitudata.com/5f4533be63abf98843.jpg',
  'http://mtapplet.meitudata.com/5f4533ab97f96f75f7.jpg',
]

const ListData = new Array(10000).fill('').map((em, index) => {
  return {
    id: v4(),
    pic: imgArr[index % 2]
  }
})

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('post componentDidMount', this.props);
  }

  render() {
    return <div className="post-base-page">
      <MainNavBar></MainNavBar>
      <h1>post base page</h1>
      <List list={ListData} itemHeight={160} valType="px"></List>
    </div>
  }
}
