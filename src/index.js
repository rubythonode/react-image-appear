//import React from 'React';

class ReactImageAppear extends React.Component {
    constructor(props) {
        super(props);

        this.state = { imgComponent: null };
        this.imageLoaded = this.imageLoaded.bind(this);
        this.getImageDimensions = this.getImageDimensions.bind(this);
        this.parseComputedDimensions = this.parseComputedDimensions.bind(this);
        this.createContainer = this.createContainer.bind(this);
    }

    componentDidMount() {
        const { src } = this.props;

        let imgElement;
        this.setState({
            imgComponent: React.createElement('img', {
                src, onLoad: this.imageLoaded, ref: ref => {
                    imgElement = ref;
                }
            })
        }, () => {
            this.getImageDimensions(imgElement);
        });
    }

    imageLoaded() {
        console.log('loaded');
        this.setState({ imgComponent: React.createElement('img', { src: this.props.src }) });
    }

    getImageDimensions(imgElement) {
        const that = this, dimensionsInterval = setInterval(() => {
            const { width, height } = this.parseComputedDimensions(imgElement);

            if (width && height) {
                clearInterval(dimensionsInterval);
                that.createContainer(width, height);
            }
        }, 10);
    }

    parseComputedDimensions(el) {
        return {
            width: Number(window.getComputedStyle(el).width.match(/\d+/)),
            height: Number(window.getComputedStyle(el).height.match(/\d+/))
        };
    }

    createContainer(width, height) {
        const { imgComponent } = this.state;

        const container = React.createElement('div', {
            style: {
                width,
                height,
                display: 'inline-block',
                background: '#bbb'
            }
        }, React.cloneElement(imgComponent, {
            style: {
                display: 'none'
            }
        }));

        this.setState({ imgComponent: container });
    }

    render() {
        const { imgComponent } = this.state;

        return imgComponent;
    }
}

//export default ReactImageAppear;