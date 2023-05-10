import project1 from '../assets/png/project1.png'
import project2 from '../assets/png/project2.png'
import project3 from '../assets/png/project3.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Summarization of books with Transformers',
        projectDesc: 'Implementation of several models based on Transformers, which allow the generation of summaries of books of different genres and of different lengths.',
        tags: ['Python', 'Transformers'],
        code: 'https://huggingface.co/cnicu/t5-small-booksum',
        image: project3 
        
    },
    {
        id: 2,
        projectName: 'Book Recommender System',
        projectDesc: 'Project in which two of the best-known recommendation systems are implemented, capable of recommending the next book to read based on one that you liked.',
        tags: ['Python', 'Scikit-Learn', 'Pandas'],
        code: 'https://github.com/CosminaNicu/book-recommendation',
        image: project2
    },
    {
        id: 3,
        projectName: 'Sentiment Analysis',
        projectDesc: 'This project aims the detection of sentiments transmitted by product reviews of an e-commerce website.',
        tags: ['Python', 'Pandas', 'NLTK'],
        code: 'https://github.com/CosminaNicu/review-sentiment-analysis',
        image: project1
        
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/