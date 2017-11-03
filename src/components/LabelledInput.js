import React, { Component } from 'react';
import uuid from 'uuid';

class LabelledInput extends Component {
  constructor(props) {
    super(props);

    this.inputId = uuid.v4();
    this.describedById = uuid.v4();
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.props.onChange(e);
  }

  render() {
    const { value, labelText, name, errorText, showErrors } = this.props;
    const hasValue = !!value;

    return (
      <div className={!hasValue && showErrors ? 'has-error' : null}>
        <label htmlFor={this.inputId}>{labelText}</label>
        <input
          id={this.inputId}
          name={name}
          className="form-control"
          type="text"
          required="required"
          aria-invalid={!hasValue}
          aria-describedby={!hasValue && showErrors ? this.describedById : null}
          onChange={this.onChangeHandler}
          value={value}
        />
        <div
          role="log"
          aria-live="polite"
          aria-relevant="additions"
          aria-atomic="true">
          {!hasValue && showErrors ? (
            <span className="help-block" id={this.describedById}>
              <i
                className="glyphicon glyphicon-exclamation-sign"
                aria-hidden="true"
              />
              {errorText}
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}

export default LabelledInput;
