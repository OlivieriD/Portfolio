package com.od.portfolio.ContactSubdomain.MapperLayer;

import com.od.portfolio.ContactSubdomain.DataAccessLayer.Message;
import com.od.portfolio.ContactSubdomain.PresentationLayer.MessageRequestDTO;
import com.od.portfolio.ContactSubdomain.PresentationLayer.MessageResponseDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MessageMapper {
    MessageResponseDTO entityToResponseDTO(Message message);
    Message requestDTOToEntity(MessageRequestDTO dto);
}