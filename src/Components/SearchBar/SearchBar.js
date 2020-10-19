import React, {useState} from 'react';
import './SearchBar.css';

const sortByOptions = { 
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};


const SearchBar = (props) => {
    const[ term, setTerm ] = useState('');
    const[ location, setLocation ] = useState('');
    const[ sortBy, setSortBy ] = useState('');


     

    const handleSearch = (event) => {
        event.preventDefault();
        props.searchYelp(term, location, sortBy);
        
        
    
    }



    const getSortByClass =  (sortByOption) => {
        if (sortBy === sortByOption) {
            return 'active';
        } 
        return '';
        
    }
    
    const handleSortByChange = (sortByOption) => {
        setSortBy( sortByOption);
    }
    

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={getSortByClass(sortByOptionValue)} onClick={handleSortByChange(sortByOptionValue)} >{sortByOption}</li>;
        });
      };


        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                      {renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={(e) => setTerm(e.target.value)} />
                    <input placeholder="Where?" onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div className="SearchBar-submit">
                    <a href="www.#.com" onClick={handleSearch}>Let's Go</a>
                </div>
            </div>

        );
};

export default SearchBar;