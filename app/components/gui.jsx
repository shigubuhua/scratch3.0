const React = require('react');

class GUIComponent extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        const {
            children,
            ...componentProps
        } =  this.props;
        return (
            <div
                className="scratch-gui"
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }}
                {...componentProps}
            >
                {children}
            </div>

        );
    }
};

GUIComponent.propTypes = {
    children: React.PropTypes.node
};

module.exports = GUIComponent;
