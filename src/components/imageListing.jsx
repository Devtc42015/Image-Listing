import React, { Component} from 'react';
import axios from 'axios';

class ImageListing extends Component {
    state = {
        image_list: [],
        loadingState: false,
        page: 1
    }

    componentDidMount(){
        this.getImages({});
        this.handleScroll();
    }

    getImages = (params) => {
        console.log(params)
        axios.get(`https://picsum.photos/v2/list`, {params: params})
        .then((response) => {
            this.setState({image_list: [...this.state.image_list, ...response.data]})
            this.setState({ loading: false});
        })
        .catch((error) => {
            console.log(error);
        });
    }

    handleScroll = () =>{
        document.addEventListener('scroll',(e)=>{
            e.stopPropagation();
            let scrollTop = document.documentElement.scrollTop,
              windowHeight = window.innerHeight,
              height = document.body.scrollHeight - windowHeight,
              scrollPercentage = (scrollTop / height);
            if(scrollPercentage > 0.9) {
                const page = this.state.page + 1;
                setTimeout(
                    this.getImages({page: page, limit: 100}),
                    3000
                )
                this.setState({page});
            }

        });
      }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className='gridImgBlock'>
                        {this.state.image_list.map((image, index) => (
                            <div className='gridImgList' key={index}>
                                <div className="ImgBlock">
                                    <img src={image.download_url} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageListing;