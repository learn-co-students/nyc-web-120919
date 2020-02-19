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

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.addNewMeme({ ...this.state, subreddit: 'memes' })

        // form.reset()
        this.setState({ title: '', url: '' })

        // all of them in subreddit memes

        // grab the input values  ==> this.state
        // if I had a JSON-server running I'd POST
        // FOR NOW. update MainContainer state.memes to append our new meme object
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