import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  SectionContainer,
  ContainerCards,
  PaginateContainer
} from '../../styled-elements/index.elements'
import {
  MicrophoneIcon,
  SearchIcon,
  Search,
  SearchFilter,
  SearchFilterContainer
} from '../../styled-elements/elements.elements'
import { animateScroll as scroll } from 'react-scroll'
import { Card, Paginate, Skelleton } from '../'

const Listings = ({ data }) => {

  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentGames = data.slice(indexOfFirstPost, indexOfLastPost)


  const paginate = (pageNumber) => {
    scroll.scrollToTop()
    setCurrentPage(pageNumber)
  }

  const previousPage = () => {
    if (currentPage !== 1) {
      scroll.scrollToTop()
      setCurrentPage(currentPage - 1);
    }
  }

  const nextPage = () => {
    if (currentPage !== Math.ceil(data.length / postsPerPage)) {
      scroll.scrollToTop()
      setCurrentPage(currentPage + 1)
    }
  }

  const renderContainer = data.filter(item => {
    if (search === '') {
      return item
    } else
      if (item.name.toLowerCase().includes(search.toLowerCase())) {
        return item
      }
  }).slice(indexOfFirstPost, indexOfLastPost).map(
    (elements) => {
      return (
        <Card key={elements.id} src={elements.avatar}
          title={elements.name}
          alt={elements.name}
          onClick={() => navigate('/detail-info', { state: elements })}
        />
      )
    }
  )

  return (
    <SectionContainer id='games'>
      <SearchFilterContainer>
        <SearchFilter>
          <SearchIcon />
          <Search placeholder='Search...'
            onChange={e => setSearch(e.target.value)}
            value={search}
            type='search'
          />
          <MicrophoneIcon />
        </SearchFilter>
      </SearchFilterContainer>
      <ContainerCards>
        {renderContainer}
      </ContainerCards>
      <PaginateContainer>
        <Paginate page={postsPerPage}
          games={data.length}
          paginate={paginate}
          currentPage={currentPage}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </PaginateContainer>
    </SectionContainer>
  )
}

export default Listings