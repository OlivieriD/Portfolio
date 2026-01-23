package com.od.portfolio.ContactSubdomain.BusinessLayer;

import com.od.portfolio.ContactSubdomain.PresentationLayer.MessageRequestDTO;
import com.od.portfolio.ContactSubdomain.PresentationLayer.MessageResponseDTO;
import java.util.List;

public interface MessageService {
    void saveMessage(MessageRequestDTO dto);
    List<MessageResponseDTO> getAllMessages();
    void deleteMessage(Integer id);
}