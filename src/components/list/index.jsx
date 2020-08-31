import React from 'react';
import { withRouter } from 'react-router-dom';

import { jieliu } from '@/utils';
import './index.less';

let winHeight = window.innerHeight;


function computedItemPos(list, itemHeight) {
  return list.map((em, index) => {
    return {
      ...em,
      top: itemHeight * index,
    }
  })
}

function getShowList(list, ref) {
  let top = window.scrollY;
  let maxHeight = top + winHeight + 200;
  let minHeight = top - 500;
  // console.log('getShowList', top)
  let res = [];
  for ( let i = 0, l = list.length; i < l; i++) {
    let em = list[i];
    if (em.top > minHeight && em.top < maxHeight) {
      res.push(em);
    }
    if (em.top >= maxHeight) {
      return res;
    }
  }
  return res;
  // return list.filter(em => {
  //   return em.top > (top - 129 - 500) && em.top < top + window.innerHeight + 100
  // })
}

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ListData: [],
      showList: [],
    };

    this.ref = React.createRef();
    this.ref.current = document.body;
    this.handleScroll = jieliu(this.handleScroll);
  }

  componentDidMount() {
    let { list, itemHeight } = this.props;
    console.log('000000000')
    window.addEventListener('scroll', this.handleScroll);
    this.handleSetListData();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log(window.scrollY, 'window.scrollY')
    let res = getShowList(this.state.ListData, this.ref)
    this.setState({
      showList: res
    })
  }

  // static getDerivedStateFromProps(nextProps, state) {
  //   // console.log(nextProps.list.length, this.props.list.length)
  //   if (nextProps.list?.length && !state.ListData.length ) {
  //     console.info('nextProps.list?.length =====> ', nextProps.list?.length)
  //   }
  //   return {
  //     ListData:  computedItemPos(nextProps.list, nextProps.itemHeight)
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    let { list, itemHeight } = this.props;
    // console.log('componentDidUpdate', prevProps.list, list)
    if (prevProps.list.length !== list.length) {
      this.handleSetListData();
    }
  }

  handleSetListData = () => {
    let { list, itemHeight } = this.props;
    this.setState({
      ListData:  computedItemPos(list, itemHeight)
    })
    this.handleScroll();
  }

  render() {
    let { itemHeight = 100, valType = 'px', history } = this.props;
    let { ListData, showList } = this.state;
    // let showList = getShowList(ListData, this.ref);

    return <div className="list-component-wrapper">
      <div className="list-wrapper" style={{
        height: itemHeight * ListData.length + valType
      }}>
        {/* {
          ListData.map(item => {
          return <ListItem key={item.id} item={item}></ListItem>
          })
        } */}
        {
          showList.map(item => {
          return <ListItem history={history} key={item.id} item={item}></ListItem>
          })
        }
      </div>
    </div>
  }
}

List.defaultProps = {
  list: []
};


function ListItem(props) {
  let { item, history } = props;

  function handleClick() {
    history.push('/post/detail?id=1')
  }

  // console.log(item.top)
  return <div className="list-item-wrapper"
    onClick={handleClick}
    // data-id={item.id}
    style={{
      transform: `translateY(${item.top}px)`
    }}>
    <code>{item.id}</code>
    <img src={item.pic} alt="" />
  </div>
}

export default withRouter(List);
