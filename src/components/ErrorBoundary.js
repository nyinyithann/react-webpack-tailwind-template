import React from 'react';
import {PropTypes} from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: null, errorInfo: null};
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo,
        });
    }

    render() {
        const {error, errorInfo} = this.state;
        const {children} = this.props;

        if (errorInfo) {
            return (
                <div className="flex flex-col items-center m-6 p-6 text-base border-[1px] rounded-sm shadow">
                    <span className="block">There was an error in loading the page.</span>
                    <button
                        type="button"
                        className="ml-1 text-cyan-500 underline hover:text-900"
                        onClick={(_) => {
                            /* eslint-disable no-self-assign */
                            window.location.href = window.location.href;
                        }}
                    >
                        Reload this page.
                    </button>
                    <details className="pt-2 text-sm text-red-200">
                        {error && error.toString()}
                        <br />
                        {errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return children;
    }
}

ErrorBoundary.defaultProps = {
    children: null,
};

ErrorBoundary.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default ErrorBoundary;
