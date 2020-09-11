import React, { useRef, useState, useEffect } from 'react';
import './Waterfall.less';
import { FallList } from './mock';

class Waterfall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      pos: [],
      posmap: {},
      lastPos: {
        x: 0,
        y: 0,
      }
    };
  }
  componentDidMount() {
    this.setState({
      list: FallList,
    });
    this.handleComputedPos();
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
  handleComputedPos = () => {
    let { lastPos } = this.state;


  }
  onImgLoad = (obj, height) => {
    this.setState({
      posmap: {
        ...this.state.posmap,
        [obj.id]: {
          x: 0,
          height: height
        }
      }
    }).then(this.handleComputedPos)
  }
  render() {
    let {} = this.props;
    let { list, posmap } = this.state;
    // console.log(list, posmap);
    console.log(posmap)
    return <div className="component-waterfall">
      <ul className="waterfall-list">
        {
          list.map((item, index) => {
            let pos = posmap[item.id] || {}
            let style = {
              transform: `translate(${pos.x || 0}, ${pos.y}px)`,
            };

            return <li className="waterfall-item" key={item.id} style={style}>
              <Card item={item} onImgLoad={this.onImgLoad}></Card>
            </li>
          })
        }

      </ul>
    </div>
  }
}

function Card(props) {
  let { item, onImgLoad } = props;
  let [loaded, setLoaded] = useState(false);
  let ref = useRef();
  let ref1 = useRef();


  useEffect(() => {
    console.log('item', item)
    console.log(ref.current, ref1.current);
    if (!loaded) {
      // let img = new Image();
      // img.src = item.src;
      ref1.current.onload = () => {
        console.log('loaded')
        let height = ref.current.offsetHeight;
        setLoaded(true);
        onImgLoad(item, height);
      }
    }
  }, [])



  return <div className="card-wrapper" ref={ref} style={{
    backgroundColor: item.color,
    height: item.height + 'px'
  }}>
    <img src={item.src} alt="" ref={ref1}/>
    <p>{item.text}</p>
  </div>

}

export default Waterfall;
