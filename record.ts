enum FilterDto {
    name = "name",
    id = "id",
}

enum Filter {
    name = "name",
    id = "id",
}

const FILTER_MAPPER_FROM_DTO: Readonly<Record<FilterDto, Filter>> = {
    [FilterDto.id]: Filter.id,
    [FilterDto.name]: Filter.name
}


function fromDto(dto: FilterDto): Filter {
    return FILTER_MAPPER_FROM_DTO[dto]
}