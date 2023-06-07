// JS Libraries
import React, {useState, useEffect} from 'react';
import Markdown from 'markdown-to-jsx';


const RenderMarkup = (props) => {
    const {fileName} = props;
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`../${fileName}`)
        .then((res) => {
            fetch(res.default)
            .then((res) => res.text())
            .then((res) => setPost(res))
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    });

    return (
        <div className='container'>
            <Markdown>{post}</Markdown>
        </div>
    )
};


export default RenderMarkup;