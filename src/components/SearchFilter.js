import React, {Component} from 'react';

import Button from './Common/Button';

/* export default class SearchFilter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card">
                <div className="searchFilterBar">
                    {this.props.resultCount} movies found
                    <div className="float-right">
                        <label className="mr-3">Sort by</label>
                        <Button label="Release Date"
                            clickHandler={this.props.releaseDateClick}
                            className={"btn btn-sm mr-3 " + (this.props.releaseDate ? 'btn-dark' : 'btn-light')}/>
                        <Button label="Rating"
                            clickHandler={this.props.ratingClick}
                            className={"btn btn-sm " + (this.props.releaseDate ? 'btn-light' : 'btn-dark')}/>
                    </div>
                </div>
            </div>
        );
    }
} */
const SearchFilter = (props) => {
    return (
        <div className="card">
            <div className="searchFilterBar">
                {props.resultCount} movies found
                <div className="float-right">
                    <label className="mr-3">Sort by</label>
                    <Button label="Release Date"
                        clickHandler={props.releaseDateClick}
                        className={"btn btn-sm mr-3 " + (props.releaseDate ? 'btn-dark' : 'btn-light')}/>
                    <Button label="Rating"
                        clickHandler={props.ratingClick}
                        className={"btn btn-sm " + (props.releaseDate ? 'btn-light' : 'btn-dark')}/>
                </div>
            </div>
        </div>
    );
};
export default SearchFilter;