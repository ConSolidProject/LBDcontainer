import React from "react";


class FederatedWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: '', error: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({errorInfo: errorInfo.componentStack.toString(), error})
  }

  render() {
    if (this.state.hasError) {

      return <div style={{marginTop: 100}}>{this.state.error.toString() || "This component could not be loaded."}</div>;
    }
    return (
      <React.Suspense fallback={this.props.delayed || <div />}>
        {this.props.children}
      </React.Suspense>
    );
  }
}

// Building on the FederatedWrapper, we can create a high order component (HOC) that takes a lazy component and returns a component with the same API.
const wrapComponent =
  (Component) =>
  ({ error, delayed, ...props }) =>
    (
      <FederatedWrapper error={error} delayed={delayed}>
        <Component {...props} />
      </FederatedWrapper>
    );


    const wrapPromise = (promise) => {
      let status = "pending"
      let result
      let suspender = promise.then(
        res => {
          status = 'success';
          result = res
        }, 
        err => {
          status = 'error';
          result = err
        }
      )
  
      return {
        read() {
          if (status ==='pending') {
            throw suspender
          } else if (status === 'error') {
            throw result
          } else if (status === 'success') {
            return result
          }
        }
      }
    }

export default wrapComponent;
