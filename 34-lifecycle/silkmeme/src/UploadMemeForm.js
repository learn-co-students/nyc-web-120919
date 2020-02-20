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

    borderStyle = length => {
        return {boxShadow: `0 0 ${Math.min((length / 2) + 2, 24)}px #61dafb, inset 0 0 ${Math.min((length / 2) + 2, 24)}px #61dafb`}
    }

    buttonClass = state => state.title.length > 0 && state.url.length > 0 ? "button-on" : "button-off"


    render() {
        return (
            <div className="upload-form">
                <form onSubmit={this.handleSubmit}>
                    <h3>Upload a new Silky Meme</h3>
                    <input style={this.borderStyle(this.state.title.length)} onChange={this.handleChange} value={this.state.title} name="title" placeholder="Title" />
                    <input style={this.borderStyle(this.state.url.length)}onChange={this.handleChange} value={this.state.url} name="url" placeholder="Image URL" />
                    <button className={this.buttonClass(this.state)} type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default UploadMemeForm;