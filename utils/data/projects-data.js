import smartscribe from '/public/image/smartscribe.png'
import fruit_multi_cnn from "/public/image/fruits-muiti-cnn.png"
import face_detection from "/public/image/face-detection.png"

export const projectsData = [
    {
        id: 1,
        name: 'Face-Detection-OpenCV',
        description: 'Face detection algorithm to recognize and identify faces with OpenCV. This repo deals with identifying the faces and also recognizing the faces with the help of OpenCV.',
        tools: ['Python'],
        code: 'https://github.com/MLminer/Face-Detection-OpenCV',
        role: 'AI engineer',
        demo: '',
        image: face_detection,
    },
    {
        id: 2,
        name: 'SmartScribe',
        description: "An innovative AI tool that transcribes and summarizes meetings, seamlessly integrating actionable insights into workflow systems to enhance productivity.",
        tools: ['Python', 'scikit-learn', 'Keras', 'Redis', 'GCP', 'Apache Spark', 'Google Analytics'],
        role: 'AI engineer',
        code: 'https://github.com/MLminer/smartscribe',
        demo: 'https://www.smartscribe.co/',
        image: smartscribe,
    },
    {
        id: 3,
        name: 'Fruits-262-Multi-Class-Classification',
        description: 'The project provides a detailed analysis of the dataset properties, including image size and distribution across classes. It contains code to build a convolutional neural network (CNN) to classify 262 types of fruit using the Fruits-262 dataset from Kaggle. ',
        tools: ['Jupyter Notebook', 'PureBasic', 'Python'],
        role: 'ML engineer',
        code: 'https://github.com/MLminer/Fruits-262-Multi-Class-Classification',
        demo: '',
        image: fruit_multi_cnn,
    },
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },