import React, { Component } from 'react';
import uuid from 'uuid';

class LabelledInput extends Component {
  inputId = uuid.v4();
  describedById = uuid.v4();

  onChangeHandler = e => {
    this.props.onChange(e);
  };

  render() {
    const { value, labelText, name, errorText, showErrors } = this.props;
    const hasValue = !!value;

    return (
      <div className={!hasValue && showErrors ? 'has-error' : null}>
        <label htmlFor={this.inputId}>{labelText}</label>
        <input
          id={this.inputId}
          name={name}
          autoComplete="off"
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
