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
  let top = ref.current.scrollTop;
  let maxHeight = top + winHeight + 200;
  let minHeight = top - 500;
  // console.log('getShowList', top)
  let res = [];
  for (let i = 0, l = list.length; i < l; i++) {
    let em = list[i];
    if (em.top > minHeight && em.top < maxHeight) {
      res.push(em);
    }
    if (em.top >= maxHeight) {
      break;
    }
  }
  // console.log(res);
  return res;
  // return list.filter(em => {
  //   return em.top > (top - 129 - 500) && em.top < top + window.innerHeight + 100
  // })
}

class ListBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ListData: [],
      showList: [],
    };

    this.ref = React.createRef();
    this.handleScroll = jieliu(this.handleScroll);
  }

  componentDidMount() {
    this.ref.current.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    this.ref.current.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let res = getShowList(this.state.ListData, this.ref)
    this.setState({
      showList: res
    })
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.list?.length && !state.ListData.length) {
      console.error('nextProps.list?.length =====> ', nextProps.list?.length)
    }
    return {
      ListData: nextProps.list?.length && !state.ListData.length ? computedItemPos(nextProps.list, nextProps.itemHeight) : state.ListData
    }
  }


  render() {
    let { itemHeight = 100, valType = 'px', history } = this.props;
    let { ListData, showList } = this.state;

    return <div className="list-component-wrapper">
      <div className="list-box-scroll" ref={this.ref}>
        <div className="list-wrapper" style={{
          height: itemHeight * ListData.length + valType
        }}>
          {
            showList.map(item => {
              return <ListItem history={history} key={item.id} item={item}></ListItem>
            })
          }
        </div>
      </div>
    </div>
  }
}

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
    <img src={item.pic} alt="" /><img src={item.pic} alt="" /><img src={item.pic} alt="" /><img src={item.pic} alt="" />
  </div>
}


export default withRouter(ListBox) ;
