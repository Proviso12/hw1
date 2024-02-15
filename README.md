# Homework 1

The goal for this assignment is to take what we've learned so far and apply it on your own. I'm giving you a basic Vite project, and not much else.

> Note: There are no unit or e2e tests provided for this assignment. Grading will be done by me, manually - giving you the flexibility to experiment without the constraints of the tests

You will create a web application that:

- Takes form input, and applies it to make an [API Request](#api-request).
- Receives the [API Response](#api-response) and displays content to the page.
- Uses [Sensible CSS](#sensible-css) to make a pleasing layout at multiple screen sizes.
- Can [Reset](#reset) back to the beginning.

Performing those tasks will earn you 80% of the credit. To get up to 100%, you need to go above the baseline in some way:

- Make me say ["Wow!"](#wow) (in a good way!) with your design, layout, and/or typography.
- Write your own [unit tests](#unit-tests).
- Write your own [e2e tests](#e2e-tests).
- Incorporate CSS or JS [animations](#animations).

I will deduct points for the following infractions:

- Not updating the DOCS.md file.
- Unhandled error messages in the browser console.
- Crashing the browser tab.

## Baseline Requirements (80%)

### API Request

Choose an API from this curated list:

- Image Noise Generator : https://php-noise.com/
- RoboHash Generator : https://robohash.org/
- GoQR Code Generator : https://goqr.me/api/doc/create-qr-code/
- AmiiboAPI : https://amiiboapi.com/docs/
- PokéAPI : https://pokeapi.co/docs/v2

(If you want to go off-list, you need to clear it with me first!)

|         Name | Points | Description                                                                                         |
| -----------: | ------ | --------------------------------------------------------------------------------------------------- |
|        Great | 2      | - makes an API call that changes based on input <br/> - has sensible defaults for skipped inputs    |
|           OK | 1      | - makes the same API call, regardless of input <br/> - does not provide defaults for skipped inputs |
| Insufficient | 0      | - does not make an API call                                                                         |

### API Response

The results view should display the information you received from the API Response. You should provide a sensible home for the information you choose to display (it's OK to omit some information, especially from the longer responses). You should handle error cases, and if the API response comes back empty with no results.

|         Name | Points | Description                                                                                                               |
| -----------: | ------ | ------------------------------------------------------------------------------------------------------------------------- |
|        Great | 2      | - changes the DOM to reflect the API response <br/> - handles a broken / empty / error response                           |
|           OK | 1      | - changes the DOM but it's incomplete / missing / broken / stale <br/> - does not handle broken / empty / error responses |
| Insufficient | 0      | - does not update the DOM                                                                                                 |

### Sensible CSS

You should use the provided reset.css.

You should come up with a visually pleasing rhythm and design language for your site.

You should have media queries that account for:

- Phone-Portrait (screen width less than or equal to 480px)
- Phone-Landscape / Tablet-Portrait (screen width between 481px and 768px)
- Tablet-Landscape / Small Desktop (screen width between 769px and 1024px)
- Medium Desktop (screen width between 1025px and 1200px)
- Large Desktop (screen width above 1200px)

At minimum, those screen sizes should adjust spacing (margin, padding) and type size (font-size and line-height) to adjust the layout.

|         Name | Points | Description                                                                                                                   |
| -----------: | ------ | ----------------------------------------------------------------------------------------------------------------------------- |
|        Great | 2      | - uses reset.css <br /> - design has visually pleasing rhythm <br /> - media queries ensure proper display at specified sizes |
|           OK | 1      | - uses reset.css <br /> - design has some visibly jarring elements <br /> - media queries attempted                           |
| Insufficient | 0      | - does not use reset.css <br /> - design lacks visual rhythm <br /> - does not use media queries                              |

### Reset

You should provide a way of going back to the "beginning" / "input phase" of the app to perform another API request.

|         Name | Points | Description                                                                                                         |
| -----------: | ------ | ------------------------------------------------------------------------------------------------------------------- |
|        Great | 2      | - goes back to the input phase <br /> - clears inputs <br /> - no stale data present after second request           |
|           OK | 1      | - goes back to input phase <br /> - does not clear inputs <br /> - some data from a previous request is still shown |
| Insufficient | 0      | - does not go back to input phase <br /> - does not clear inputs                                                    |

## Beyond Baseline (get to 100%)

### Wow!

When I open and run your project, something about it is so well done that I become impressed. Some ideas here include paying extra attention to your design / layout / typography, the thoroughness of your use of the API, an extra feature that makes it easier to use. Demonstrate that you ate, and left no crumbs.

### Unit Tests

Write your own unit tests for your functions - particularly the ones where you provide an input/parameter/argument and get a returned value.

### E2E Tests

Write your own playwright tests (that I can then run to see how your project works).

### Animations

Incorporate JavaScript and/or CSS Animations into the display of your project. (This is really just a specific extension of the ["Wow!"](#wow) category.)
