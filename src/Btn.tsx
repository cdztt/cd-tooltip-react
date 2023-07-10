import { useEffect, useRef, useState } from "react"

export default function Btn() {
    const [ok, setOk] = useState(false)
    const r = useRef(1)
    useEffect(() => {
        if (ok && r.current === 1) {
            console.log('ok')
        }
    }, [])
    return (
        <button>
            点击
        </button>
    )
}