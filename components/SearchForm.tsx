import React from 'react'
import Form from 'next/form';
import { Search } from 'lucide-react';
import SearchFormReset from './SearchFormReset';

const SearchForm = ({query}: {query? : string}) => {
  return (
    <Form action="/" className="search-form" scroll={false}>
        <input
            name="query"
            defaultValue={query}
            className="search-button"
            placeholder="Search Startups"  
            />

        <div className="flex gap-2">
            { query && <SearchFormReset /> }

            <button type="submit" className="text-white search-btn">
                <Search className="size-5"/>
            </button>
        </div>
    </Form>
  )
}

export default SearchForm