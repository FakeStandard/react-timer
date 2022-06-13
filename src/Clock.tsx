import React from "react"
import './Clock.css';
import logo from './logo.svg';

export interface IClockProps {

}

export interface IClockStates {
  date: Date
}

export class Clock extends React.Component<IClockProps, IClockStates> {
  private timerID: any;

  constructor(props: IClockProps) {
    super(props)

    this.state = {
      date: new Date()
    }
  }

  // 當 Component 被 render 到 DOM 之後才會執行
  componentDidMount() {
    // mount: 裝載(Component)

    this.timerID = setInterval(
      () => this.tick(), 1000
    );

  }

  // 當 Component 從 DOM 被移除後執行
  componentWillUnmount() {
    // unmount: 卸載(Component)

    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render(): React.ReactNode {
    return (
      <div className="Clock">
        <header className="Clock-header">
          <img src={logo} className="Clock-logo" alt="logo" />
          <h1>Hello, React</h1>

          {/* timer */}
          <h2>{this.state.date.toLocaleTimeString()}</h2>
        </header>
      </div>
    )
  }
}