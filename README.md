# Usage

1. `npm i @cdztt/tooltip-react`

1. sample code:

```javascript
import Tooltip from '@cdztt/tooltip-react'

function Link() {
    return (
        <div>
            <a href='https://example.com'>
                Link
            </a>
            <Tooltip place='bottom'>
                example.com
            </Tooltip>
        </div>
    )
}
```

* API

Parameters:
| Parameters  | Properties | Type       | Units   | Default   |
| ----------- | ---------- | ---------- | ------- | --------- |
|             | children   | React Node |         | undefined |
|             | place      | String     |         | 'top'     |
|             | size       | Number     | rem     | 1         |
|             | arrowSize  | Number     | px      | 8         |

Properties:
| place       | Value          |
| ----------- | -------------- |
|             | 'top'          |
|             | 'bottom'       |
|             | 'left'         |
|             | 'right'        |
|             | 'top-left'     |
|             | 'top-right'    |
|             | 'bottom-left'  |
|             | 'bottom-right' |
|             | 'center'       |
