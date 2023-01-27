import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID FQiUi1uhUO-IjroYgFUzjNWuRtNM94EFPRL_AXT0ock',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;