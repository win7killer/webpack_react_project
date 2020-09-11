import React from 'react';
import './Waterfall.less';
import { FallList } from './mock';

class Waterfall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      pos: [],
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

    let rows = 20;
    let res = [[], []]

    let pos = list.map((item, index) => {
      let row0 = res[0];
      let row1 = res[1];
      let tarRow = res[0];
      let x = 0;
      console.log(res[0], res[1])

      if ((row0[row0.length - 1] || 0) > (row1[row1.length - 1] || 0)) {
        tarRow = res[1];
        x = '50vw';
      }



      let temp = tarRow[tarRow.length - 1] || 0;

      console.log('temp', temp)
      tarRow.push(item.height + temp);

      return {
        ...item,
        x: x,
        y: temp
      };

    });

    console.log(res, pos)

    this.setState({
      pos,
    })
  }
  render() {
    let {} = this.props;
    let { list, pos } = this.state;
    console.log(list, pos);
    return <div className="component-waterfall">
      <ul className="waterfall-list">
        {
          pos.map((item, index) => {
            let style = {
              transform: `translate(${item.x || 0}, ${item.y}px)`,
            };

            return <li className="waterfall-item" key={item.id} style={style}>
              <Card item={item}></Card>
            </li>
          })
        }

      </ul>
    </div>
  }
}

function Card(props) {
  let { item } = props;


  return <div className="card-wrapper" style={{
    backgroundColor: item.color,
    height: item.height + 'px'
  }}>
    <p>{item.text}</p>
  </div>

}

export default Waterfall;
