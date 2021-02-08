# project3

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->
[![Issues][issues-shield]][issues-url]
<!-- [![MIT License][license-shield]][license-url] -->
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/https://github.com/vaykoActual/project3">
    <img src="https://i.imgur.com/OIC7znsb.jpg" alt="Logo" width="180" height="180">
  </a>

  <h3 align="center">project3</h3>

  <p align="center">
    project3 is a MERN stack motorcycle trade, buy and sell app.
    <br />
    <a href="https://github.com/vaykoActual/project3"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/vaykoActual/project3/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Build a full stack Mongo/Express/React/Node app, commonly referred to as the MERN Stack.

<!-- Here's a blank template to get started:
**To avoid retyping too much info. Do a search and replace with your text editor for the following:**
`github_username`, `repo_name`, `twitter_handle`, `email`, `project_title`, `project_description` -->


### Built With

* [Mongo]()
* [Express]()
* [React]()
* [Node]()





<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  npm inti -y
  npm install morgan express cors body-parser
  npm install nodemon -D
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```



<!-- USAGE EXAMPLES -->
## Usage

This app will be used to buy and sell motorcycles...

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources. -->

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->


## Schema

```
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        title: { type: String, required: true },
        imgURL: { type: String, required: true },
        desciption: { type: String, required: true },
        price: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model('posts', Post)
```

<!-- ROADMAP -->
## Roadmap

https://drive.google.com/file/d/1Xy-vTyBdSTBXf4wxGKbRd_JmuqNuA9RX/view?usp=sharing

![Screen Shot 2021-02-08 at 4 52 32 PM](https://user-images.githubusercontent.com/76179998/107286194-41ce2180-6a2e-11eb-8e39-3d974ac366fe.png)

![Screen Shot 2021-02-08 at 4 52 58 PM](https://user-images.githubusercontent.com/76179998/107286267-5ca09600-6a2e-11eb-9932-c158670b98a1.png)

![Screen Shot 2021-02-08 at 4 53 14 PM](https://user-images.githubusercontent.com/76179998/107286359-7c37be80-6a2e-11eb-9a01-e7ff20a1a19b.png)




<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Shayne Vaykovich - (https://www.linkedin.com/in/shayne-vaykovich-57530721/) - Linkedin
Aslan Shaken
Varit Seekhao
Steven Strumolo

Project Link: [https://github.com/vaykoActual/project3](https://github.com/vaykoActual/project3)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Aslan Shaken]()
* [Shayne Vaykovich]()
* [Steven Strumolo]()
* [Varit Seekhao]()

## Team Expectations

https://docs.google.com/document/d/1TuvOuy0UQ42KGOza9IAGs8pkPfmoIlVP4Vj6OnJNGG4/edit?usp=sharing



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/vaykoActual/project3
[forks-shield]: https://img.shields.io/github/forks/github_username/repo.svg?style=for-the-badge
[forks-url]: https://github.com/vaykoActual/project3
[stars-shield]: https://img.shields.io/github/stars/github_username/repo.svg?style=for-the-badge
[stars-url]: https://github.com/vaykoActual/project3
[issues-shield]: https://img.shields.io/github/issues/github_username/repo.svg?style=for-the-badge
[issues-url]: https://github.com/vaykoActual/project3/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/github_username
