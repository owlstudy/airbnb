import React from "react"
import styled from "styled-components"
import palette from "../../styles/palette"

const Container = styled.div`
  width: 100%;
  height: 46px;
  select {
    width: 100%;
    height: 100%;
    background-color: white;
    border: 1px solid ${palette.gray_eb};
    border-radius: 4px;
    outline: none;
    padding: 0 11px;
    -webkit-appearance: none;
    background-image: url("/static/svg/common/selector/selector_down_arrow.svg");
    background-repeat: no-repeat;
    background-position: right 11px center;
    font-size: 16px;
    &:focus {
      border-color: ${palette.dark_cyan};
    }
  }
`

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[]
  value?: string
  disabledOptions?: string[]
}

const Selector: React.FC<IProps> = ({
  options = [],
  disabledOptions = [],
  ...props
}) => {
  return (
    <Container>
      <select {...props}>
        {/* <option value="월" disabled>
          월
        </option> */}
        {disabledOptions.map((option, index) => (
          <option key={index} value={option} disabled>
            {option}
          </option>
        ))}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Container>
  )
}

export default Selector
