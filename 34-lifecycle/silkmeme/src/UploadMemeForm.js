import React, { Component } from 'react';

class UploadMemeForm extends Component {
    state = {
        title: '',
        url: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    // the above handeChange does BOTH of these with dynamic keys
    // handleTitle = () => {
    //     this.setState({ title: event.target.value  })
    // }

    // handleURL = () => {
    //     this.setState({ url: event.target.value  })
    // }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addNewMeme({ ...this.state, subreddit: 'memes' })

        // form.reset() becomes...
        this.setState({ title: '', url: '' })
    }


    render() {
        return (
            <div className="upload-form">
                <form onSubmit={this.handleSubmit}>
                    <h3>Upload a new Silky Meme</h3>
                    <input onChange={this.handleChange} value={this.state.title} name="title" placeholder="Title" />
                    <input onChange={this.handleChange} value={this.state.url} name="url" placeholder="Image URL" />
                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default UploadMemeForm;