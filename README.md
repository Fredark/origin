# Origin Frontend Take-Home Assignment

Frontend take-home assessment for the Engineering Manager opportunity at **Origin**.

### Assets
[Layout mockups](https://www.figma.com/file/Axdg0WSJURcxp8Arq3gg9x/Take-Home-Assignment-v2)

### [Preview link](https://origin-snowy.vercel.app)

#### Money input

The Money input:

- Have special and letter characters validation.
- autofill "." as the first character with "0.".
- Prevents multiple "." characters.
- Format the currency with "," every three numbers.
- Shows the numeric keyboard to mobile users.
- Has hover and focus CSS effects.

#### Date input

The Date input:

- Allow only future months starting by the next month.
- Has keyboard arrow functionalities, where the horizontal buttons navigate **months**, and the vertical ones navigate **years**.
- Disable the left arrow when it is not possible to navigate back.
- Has hover and focus CSS effects.

#### Confirm button

The confirm button:

- Gets disabled when no amount is provided.

# Usage

```
yarn install
```

```
yarn start
```

### Linting and Format

```
yarn lint
yarn format
```

### Testing

```
yarn test
```
