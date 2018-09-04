import React, { Component } from "react";
import { Form, Label } from "semantic-ui-react";
import Script from "react-load-script";
import PlacesAutocomplete from "react-places-autocomplete";

const styles = {
  autocompleteContainer: {
    zIndex: 1000,
  },
};

export default class PlaceInput extends Component {
  state = { address: "", scriptLoaded: false };

  handleScriptLoad = () => this.setState({ scriptLoaded: true });

  render() {
    const {
      input,
      width,
      onSelect,
      placeholder,
      options,
      meta: { touched, error },
    } = this.props;
    return (
      <Form.Field error={touched && !!error} width={width}>
        <Script
          onLoad={this.handleScriptLoad}
          url="https://maps.googleapis.com/maps/api/js?key=GOOGLE_MAP_API_KEY&libraries=places"
        />
        {this.state.scriptLoaded && (
          <PlacesAutocomplete
            inputProps={{ ...input, placeholder }}
            options={options}
            onSelect={onSelect}
            styles={styles}
          />
        )}
        {touched &&
          error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
      </Form.Field>
    );
  }
}
