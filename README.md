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

1. API

Parameters:
| Parameters  | Properties | Type       | Units   |
| ----------- | ---------- | ---------- | ------- |
|             | children   | React Node |         |
|             | place      | String     |         |
|             | size       | Number     | rem     |
|             | arrowSize  | Number     | px      |

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
